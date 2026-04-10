#!/usr/bin/env bun
import { $ } from "bun";
import { render, type StatusLineInput } from "./render";

const input = JSON.parse(await Bun.stdin.text()) as StatusLineInput;

// --- Git ---
async function getGitBranch(dir: string) {
  if (!dir) return "";
  const gitCheck = await $`git -C ${dir} rev-parse --git-dir`.quiet().nothrow();
  if (gitCheck.exitCode !== 0) return "";
  const [br, d1, d2] = await Promise.all([
    $`git -C ${dir} branch --show-current`.quiet().nothrow(),
    $`git -C ${dir} diff --quiet`.quiet().nothrow(),
    $`git -C ${dir} diff --cached --quiet`.quiet().nothrow(),
  ]);
  const dirty = d1.exitCode !== 0 || d2.exitCode !== 0 ? "*" : "";
  return `${br.text().trim()}${dirty}`;
}

const dir = input.workspace?.current_dir ?? "";
const branch = await getGitBranch(dir);

render(input, branch);
