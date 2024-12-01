import { ToolCallState } from "core";
import { RootState } from "../store";

export function findCurrentToolCall(
  state: RootState["session"]["messages"],
): ToolCallState | undefined {
  return state[state.length - 1]?.toolCallState;
}
