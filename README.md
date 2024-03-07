Steps:

1. Clone project
2. Checkout dev branch
3. Run following command to install nodemodules: "npm install"
4. Increase version numbers inside "/seerDiscoverDataTableROMPCF/ControlManifest.input.xml" file and "/seerDiscoverDataTableROMPCFSolution/src/Solution.xml" file
5. Run following command to build release: "npm run release"
6. After build process, build inside "/seerDiscoverDataTableROMPCFSolution/bin/Release"
7. Then import that build file into specific CRM environment and publish