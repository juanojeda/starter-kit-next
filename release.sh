#!/bin/bash
set -e

read -p "Are you sure you want to deploy? (y/n): " answer
if [ "$answer" != "y" ]; then
  echo "Deployment canceled."
  exit 1
fi

if ! git diff-index --quiet HEAD --; then
  read -p "You have uncommitted changes. Would you like to stash them? (y/n): " answer

  if [ "$answer" != "y" ]; then
    echo "Deployment canceled, please stash your changes before deploying"
    exit 1
  fi
  git stash save --include-untracked
fi

git checkout main && git pull && git checkout -b release/$(date '+%Y-%m-%d')
git push --set-upstream origin $(git rev-parse --abbrev-ref HEAD)
git checkout main