import { writeFile as fsWriteFile, exists as fsExists } from "fs"
import { exec as cpExec } from "child_process"
import { promisify } from "util"

export const writeFile = promisify(fsWriteFile)
export const exists = promisify(fsExists)
export const exec = promisify(cpExec)
