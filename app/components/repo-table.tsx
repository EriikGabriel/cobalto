"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Input } from "@ui/input";
import { Table, TableBody, TableCell, TableRow } from "@ui/table";
import { formatDistanceToNow, parseISO } from "date-fns";
import { BookOpen, Box, CircleCheck, Search } from "lucide-react";
import { useOctokit } from "../hooks/octokit";
import { GithubRepo, GithubRepos } from "../types/octokit";
import { Button } from "./ui/button";

interface RepoTableProps {
  setSelectedRepoName: Dispatch<SetStateAction<string | null>>;
  selectedRepoName: string | null;
}

export function RepoTable({
  selectedRepoName,
  setSelectedRepoName,
}: RepoTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [userRepos, setUserRepos] = useState<
    { has_readme?: boolean } & GithubRepos
  >([]);

  const clientOctokit = useOctokit();

  useEffect(() => {
    const getUserRepos = async () => {
      const { data: repos } = await clientOctokit.request("GET /user/repos", {
        visibility: "all",
        sort: "pushed",
      });

      const reposWithReadme = await Promise.all(
        repos.map(async (repo: GithubRepo) => {
          try {
            const { data: contents, status } = await clientOctokit.request(
              "GET /repos/{owner}/{repo}/contents/{path}",
              {
                owner: repo.owner.login,
                repo: repo.name,
                path: "",
              },
            );

            const has_readme = !!(contents as { name: string }[]).find(
              ({ name }) => name === "README.md",
            );

            return { ...repo, has_readme };
          } catch (error) {
            return { ...repo, has_readme: false };
          }
        }),
      );

      setUserRepos(reposWithReadme);
    };

    getUserRepos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns: ColumnDef<{ has_readme?: boolean } & GithubRepo>[] = [
    {
      accessorKey: "pushed_at",
      header: "Updated At",
      cell: ({ row }) => <span>{row.getValue("pushed_at")}</span>,
    },
    {
      accessorKey: "name",
      header: "name",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Box className="size-4 text-primary-200" />
          <span className="font-semibold">
            {row.getValue("name")} <br />
            <small className="text-xs text-muted-foreground">
              Updated{" "}
              {formatDistanceToNow(parseISO(row.getValue("pushed_at")), {
                addSuffix: true,
              })}
            </small>
          </span>
        </div>
      ),
    },
    {
      id: "has_readme",
      cell: ({ row }) => {
        const hasReadme = !!row.original.has_readme;
        return hasReadme ? (
          <div className="flex justify-end">
            <BookOpen className="size-5 text-primary-200" />
          </div>
        ) : (
          <div className="size-5" />
        );
      },
    },
    {
      id: "select",
      cell: ({ row }) => {
        const isSelected = row.original.name === selectedRepoName;
        return isSelected ? (
          <div className="flex justify-end">
            <CircleCheck className="size-5 fill-primary-200 text-slate-900" />
          </div>
        ) : (
          <div className="size-5" />
        );
      },
    },
  ];

  const table = useReactTable({
    data: userRepos,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: { pageSize: 5 },
      columnVisibility: { pushed_at: false },
    },
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <div className="flex h-10 items-center rounded-md border border-muted-foreground pl-3 text-sm ring-offset-background">
          <Search className="size-4 text-muted-foreground" />
          <Input
            placeholder="Search repository..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm !border-none !ring-0 !ring-transparent placeholder:text-sm placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="rounded-lg border border-primary-200 bg-primary-200/10">
        <Table className="mx-4 w-[calc(100%-2rem)]">
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer border-primary-200 even:border-t hover:bg-transparent"
                  onClick={() =>
                    setSelectedRepoName(
                      row.original.name === selectedRepoName
                        ? null
                        : row.original.name,
                    )
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="select-none space-x-2">
          <Button
            className="w-20"
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className="w-20"
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
