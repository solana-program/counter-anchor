/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  containsBytes,
  fixEncoderSize,
  getBytesEncoder,
  type Address,
  type ReadonlyUint8Array,
} from '@solana/web3.js';
import {
  type ParsedCreateInstruction,
  type ParsedIncrementInstruction,
} from '../instructions';

export const COUNTER_PROGRAM_ADDRESS =
  'CounterProgram111111111111111111111111111111' as Address<'CounterProgram111111111111111111111111111111'>;

export enum CounterAccount {
  Counter,
}

export function identifyCounterAccount(
  account: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): CounterAccount {
  const data = 'data' in account ? account.data : account;
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([255, 176, 4, 245, 188, 253, 124, 25])
      ),
      0
    )
  ) {
    return CounterAccount.Counter;
  }
  throw new Error(
    'The provided account could not be identified as a counter account.'
  );
}

export enum CounterInstruction {
  Create,
  Increment,
}

export function identifyCounterInstruction(
  instruction: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): CounterInstruction {
  const data = 'data' in instruction ? instruction.data : instruction;
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([24, 30, 200, 40, 5, 28, 7, 119])
      ),
      0
    )
  ) {
    return CounterInstruction.Create;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([11, 18, 104, 9, 104, 174, 59, 33])
      ),
      0
    )
  ) {
    return CounterInstruction.Increment;
  }
  throw new Error(
    'The provided instruction could not be identified as a counter instruction.'
  );
}

export type ParsedCounterInstruction<
  TProgram extends string = 'CounterProgram111111111111111111111111111111',
> =
  | ({
      instructionType: CounterInstruction.Create;
    } & ParsedCreateInstruction<TProgram>)
  | ({
      instructionType: CounterInstruction.Increment;
    } & ParsedIncrementInstruction<TProgram>);
