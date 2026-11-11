#!/data/data/com.termux/files/usr/bin/bash
cd ~/kronos-protocol || cd ~/sycro-web/web
export CC=clang
export CXX=clang++
npm run dev -- --host 0.0.0.0
