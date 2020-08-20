import init, { run_app } from './pkg/multitool.js';
async function main() {
   await init('/pkg/multitool_bg.wasm');
   run_app();
}
main()