{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems.url = "github:nix-systems/default";
  };

  outputs = inputs @ {
    flake-parts,
    self,
    nixpkgs,
    ...
  }: flake-parts.lib.mkFlake {inherit inputs;} {
      systems = import inputs.systems;
      perSystem = {
        config,
        self',
        pkgs,
        system,
        ...
      }: {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.nodePackages.typescript-language-server
          ];
          nativeBuildInputs = [
            pkgs.nodejs_21
            pkgs.nodePackages.npm
          ];
        };

        formatter = pkgs.alejandra;
      };
    };
}
