{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/default";
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs = inputs @ {
    flake-parts,
    self,
    nixpkgs,
    ...
  }: flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.treefmt-nix.flakeModule
      ];
      systems = import inputs.systems;
      perSystem = {
        config,
        self',
        pkgs,
        system,
        ...
      }: {
        treefmt.config = {
          projectRootFile = "flake.nix";
          programs.alejandra.enable = true;
          programs.prettier.enable = true;
        };

        devShells.default = pkgs.mkShell {
          inputsFrom = [
            config.treefmt.build.devShell
          ];
          packages = [
            pkgs.nodePackages.typescript-language-server
          ];
          nativeBuildInputs = [
            pkgs.nodejs_21
            pkgs.nodePackages.npm
          ];
        };
      };
    };
}
