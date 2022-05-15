var documenterSearchIndex = {"docs":
[{"location":"guide/#Nonlinear-Expressions","page":"Getting Started","title":"Nonlinear Expressions","text":"","category":"section"},{"location":"guide/","page":"Getting Started","title":"Getting Started","text":"MadDiff.jl provides a flexible user-interface for writing nonlinear expressions and evaluating the expressions and functions. For example,","category":"page"},{"location":"guide/","page":"Getting Started","title":"Getting Started","text":"using MadDiff\n\nx = Variable()\np = Parameter()\nexpr = x[1]^2 + exp(x[2]^p[1])/2 + log(x[3]+p[2])\nprintln(expr) # x[1]^2 + exp(x[2]^p[1])/2 + log(x[3] + p[2])\n\nx0 = [0.,0.5,1.5]\np0 = [2,0.5]\n\nf = function_evaluator(expr)\nprintln(\"f(x0,p0) = $(f(x0,p0))\") # f(x0,p0) = 1.3351598889038159\n\ny0 = zeros(3)\ng = gradient_evaluator(expr)\ng(y0,x0,p0)\nprintln(\"g(x0,p0) = $y0\") # g(x0,p0) = [0.0, 0.6420127083438707, 0.5]","category":"page"},{"location":"guide/#Nonlinear-Programming","page":"Getting Started","title":"Nonlinear Programming","text":"","category":"section"},{"location":"guide/","page":"Getting Started","title":"Getting Started","text":"MadDiff.jl provides a simple user-interface for creating nonlinear prgogramming models and allows solving the created models using the solvers with NLPModels.jl interface (such as NLPModelsIpopt.jl and MadNLP.jl). The syntax is as follows:","category":"page"},{"location":"guide/","page":"Getting Started","title":"Getting Started","text":"using MadDiff, NLPModelsIpopt\n\nm = MadDiffModel(; print_level=3) \n\nx = [variable(m; start=mod(i,2)==1 ? -1.2 : 1.) for i=1:1000]\nobjective(m, sum(100(x[i-1]^2-x[i])^2+(x[i-1]-1)^2 for i=2:1000))\nfor i=1:998\n    constraint(m, 3x[i+1]^3+2*x[i+2]-5+sin(x[i+1]-x[i+2])sin(x[i+1]+x[i+2])+4x[i+1]-x[i]exp(x[i]-x[i+1])-3 == 0)\nend\n\ninstantiate!(m) # this makes the model ready to be solved\nipopt(m)","category":"page"},{"location":"guide/#Use-with-JuMP","page":"Getting Started","title":"Use with JuMP","text":"","category":"section"},{"location":"guide/","page":"Getting Started","title":"Getting Started","text":"MadDiff.jl can be used as an automatic differentiation backend. The syntax is as follows:","category":"page"},{"location":"guide/","page":"Getting Started","title":"Getting Started","text":"using MadDiff, JuMP, Ipopt\n\nm = JuMP.Model(Ipopt.Optimizer) \n\n@variable(m, x[i=1:1000], start=mod(i,2)==1 ? -1.2 : 1.)\n@NLobjective(m, Min, sum(100(x[i-1]^2-x[i])^2+(x[i-1]-1)^2 for i=2:1000))\n@NLconstraint(m, [i=1:998], 3x[i+1]^3+2*x[i+2]-5+sin(x[i+1]-x[i+2])sin(x[i+1]+x[i+2])+4x[i+1]-x[i]exp(x[i]-x[i+1])-3 == 0)\n\noptimize!(m; differentiation_backend = MadDiffAD())","category":"page"},{"location":"api/#API-Manual","page":"API Reference","title":"API Manual","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [MadDiffCore, MadDiffModels, MadDiffMOI, MadDiff]","category":"page"},{"location":"api/#MadDiffModels.MadDiffModel","page":"API Reference","title":"MadDiffModels.MadDiffModel","text":"MadDiffModel\n\nA mathematical model of a nonlinaer program.\n\n\n\n\n\n","category":"type"},{"location":"#MadDiff.jl","page":"Home","title":"MadDiff.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This documentation page is under construction.","category":"page"},{"location":"","page":"Home","title":"Home","text":"MadDiff.jl is a simple algebraic modeling/differentiation package. MadDiff.jl constructs first and second derivative functions off-line (i.e., prior to calling the optimization solver) by applying operator overloading-based automatic differentiation on functions. The exact derivative functions can be obtained as results. ","category":"page"},{"location":"#Bug-reports-and-support","page":"Home","title":"Bug reports and support","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Please report issues and feature requests via the Github issue tracker. ","category":"page"}]
}
