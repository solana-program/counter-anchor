#!/usr/bin/env zx
import { getCargoMetadata, getSolanaVersion, getToolchain } from '../utils.mjs';

await $`echo "ANCHOR_VERSION=${getCargoMetadata()?.cli?.anchor}" >> $GITHUB_ENV`;
await $`echo "SOLANA_VERSION=${getSolanaVersion()}" >> $GITHUB_ENV`;
await $`echo "TOOLCHAIN_FORMAT=${getToolchain('format')}" >> $GITHUB_ENV`;
await $`echo "TOOLCHAIN_LINT=${getToolchain('lint')}" >> $GITHUB_ENV`;
