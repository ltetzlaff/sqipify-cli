import sqipify from "sqipify"
import { writeFile } from "./util"

export class Job {
  constructor(
    private filename: string,
    private numberOfPrimitives: number,
    private blur: number,
    private mode: number,
    private optimize: boolean,
    private outFile: string
  ) {}

  public async run() {
    const { filename, numberOfPrimitives, blur, mode, optimize, outFile } = this
    const result = await sqipify(
      filename,
      numberOfPrimitives,
      blur,
      mode,
      optimize
    )
    await writeFile(outFile, result.output.svg)
  }
}
