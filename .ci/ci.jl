using Pkg

Pkg.update()
deps = [
    PackageSpec(name = "MathOptInterface", rev="master")
    PackageSpec(name = "JuMP", rev="od/moi-nonlinear")
]

root_directory = dirname(@__DIR__)

pkgs = [
    PackageSpec(path = joinpath(root_directory, "lib", "MadDiffCore")),
    PackageSpec(path = joinpath(root_directory, "lib", "MadDiffModels")),
    PackageSpec(path = joinpath(root_directory, "lib", "MadDiffMOI")),
    PackageSpec(path = joinpath(root_directory))
]

Pkg.add.(deps)
Pkg.develop.(pkgs)
Pkg.test([
    "MadDiffCore", "MadDiffModels", "MadDiffMOI", "MadDiff"
])