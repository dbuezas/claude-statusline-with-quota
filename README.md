# Claude Code Status Line with quota usage

Bun ends up loading faster than a pure bash script believe it or not.

<img width="420" alt="screenshot" src="https://github.com/user-attachments/assets/38b8647e-02c7-4a9c-abde-cec842c816d6" />

The quota bars show usage as a green-to-red gradient. The dark shade marks how much time has elapsed in the window — if usage exceeds the dark shade, you're consuming quota faster than it replenishes.

## Install

1. Install [Bun](https://bun.sh)
2. Clone this repo and install dependencies:
   ```sh
   git clone https://github.com/davidbuezas/claude-statusline-command.git ~/.claude/statusline-command
   cd ~/.claude/statusline-command
   bun install
   ```
3. Add to `~/.claude/settings.json`:
   ```json
   "statusLine": {
     "type": "command",
     "command": "bun ~/.claude/statusline-command"
   },
   ```
