"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@ui/alert-dialog";
import { Button } from "@ui/button";
import { Box } from "lucide-react";
import { useState } from "react";
import { RepoTable } from "./repo-table";

interface RepoDialogProps {
  user: string;
}

export function RepoDialog({ user }: RepoDialogProps) {
  const [selectedRepoName, setSelectedRepoName] = useState<string | null>(null);

  return (
    <AlertDialog defaultOpen={!!!selectedRepoName}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>

      <AlertDialogContent className="min-h-[70%] max-w-4xl outline-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-primary-200">
            Select a Github Repository
          </AlertDialogTitle>
          <AlertDialogDescription>
            Select a repository to change or generate a README
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex h-[30rem] flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-lg border border-primary-100 bg-primary-200/10 px-5 py-2 text-sm">
              <SiGithub className="size-4" />
              <span className="font-semibold">{user}</span>
            </div>
            <span className="text-xl">/</span>
            <div className="flex items-center justify-between gap-3 rounded-lg border border-primary-100 px-5 py-2 text-sm">
              {!!selectedRepoName ? (
                <>
                  <Box className="size-4" />
                  <span className="font-semibold">{selectedRepoName}</span>
                </>
              ) : (
                <span>No repository selected</span>
              )}
            </div>
          </div>
          <div>
            <RepoTable
              selectedRepoName={selectedRepoName}
              setSelectedRepoName={setSelectedRepoName}
            />
          </div>
        </div>

        <AlertDialogFooter>
          <Button
            className="w-1/4 select-none bg-primary-200 font-bold"
            disabled={!!!selectedRepoName}
          >
            Done
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
