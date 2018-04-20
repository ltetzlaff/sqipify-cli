import { exists, exec } from "../util"

async function run() {
  const files = ["src/tests/temp0.svg"]
  const commands = ["node dist/cli.js"]
  const args = " norway.jpg -n 10 -b 5 -m 2 -o "

  const res = await Promise.all(
    commands
      .map(async (c, i) => exec(c + args + files[i]))
      .map(async (execution, i) => {
        const { stdout, stderr } = await execution
        const created = await exists(files[i])
        return { created, stdout, stderr }
      })
  )
  console.log(JSON.stringify(res))
}

run()
