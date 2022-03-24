#!/bin/bash

script=$1
win_script=${script//\//\\\\}

if [ -f /proc/sys/fs/binfmt_misc/WSLInterop ]; then
  # Windows environment (WSL).
  node.exe $win_script
else
  # Other environment.
  node $script
fi
