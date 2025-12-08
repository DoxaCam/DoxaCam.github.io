const stringArray = [];

stringArray[0] = `
## Introduction -

&nbsp;&nbsp;&nbsp;&nbsp;Fractals are mathematical objects that share the property of self-similarity. These objects are everywhere in nature. Think of a pinecone or a fern branch; both objects sharing self-similar structures. We can use the property fractals to find properties of objects in nature. We might think bigger. What might be the length of the coastline? In the famous coastline paradox¹, a rough outline of Great Britain is made. Each iteration of the fractal hugs the coastline tighter and tighter. The more iterations the fractal goes through, the better the estimate of the perimeter of Great Britain.  In this paper, I will be evaluating the properties of 2D and 3D fractals. We will be evaluating 5 properties of various fractals: perimeter, area, surface area, volume and Hausdorff Dimensionality. 
`


stringArray[1] = `
## Calculating Fractal Perimeter -
&nbsp;&nbsp;&nbsp;&nbsp;Take the example of Sierpinski carpet. The carpet is constructed by dividing a unit square into 9 equal smaller squares with a scale of 1/3 of the original square. Each iteration, we will take the copy entire unit square, resize and then places then in each square, besides the middle:

`

stringArray[2] = `
The construction of the fractal allows for the derivation of a formula to find the perimeter at each iteration. For the purpose of these exercises, We will count the square added, as added perimeter. So for the first iteration or i_0 we would have a perimeter of 4, i_1 would have 8 small squares of size 1/3 and so on and so forth. A general pattern can be seen, and is described as such:
`

stringArray[3] = `
We can take the sum and see if converges or diverges: 
`
stringArray[4] = `
So, as the iteration increases to infinity its perimeter approaches __infinity__. 
`
stringArray[5] = `
## Calculating Fractal Area - 

 &nbsp;&nbsp;&nbsp;&nbsp;Let's take the example of the Swiss carpet, the 2-D analog for the Jerusalem Cube3. Its construction cuts the unit square into 4 squares with a scale of √2 -1  and 4 squares with (√2 -1)² Each iteration, puts a copy in the new squares constructed:
`
stringArray[6] = `
We will detonate the area removed in white and the unit square in black. We will calculate the sum of the area for each part of the fractal. The fractal is split between large squares in the corners and small squares in the middle-sides of the fractal. 
`
stringArray[7] = `
Because of the complexity of the fractal, the exact form of the area equation could be incorrect. However, we only need the first term of the series to evaluate. This shows that the sum of the series converges to a non-zero number, around ~0.05
`
stringArray[8] = `
##### Note: because |(√2 -1)²| < |√2 -1| < 1, both sums converge
`
stringArray[9] = `
## Calculating Fractal Surface Area - 

&nbsp;&nbsp;&nbsp;&nbsp;Let's take the example of canter squares, made from the canter set. Its construction is in the 3D plane. Take a unit cube and cut it into 27 equal cubes. Remove all smaller cubes besides the corners. Repeat the process with the remaining cub each iteration:


`
stringArray[10] = `
We can find a general form for the surface area, using the surface area of a cube and multiplying and scale each part of the model:


`
stringArray[11] = `
Where Anis the total area of the 3D fractal at any iteration n. We merely need to take the limit as n approaches infinity:


`
stringArray[12] = `
Similar to the series, the limit will approach 0, because of 8/9 term is not  >  1.


`
stringArray[13] = `
As the iteration approaches infinity, the surface area approaches 0. 
`

stringArray[14] = `
## Calculating Fractal Volume -

&nbsp;&nbsp;&nbsp;&nbsp;Let's take the example of menger sponge, a 3D analog for Sierpiński carpet . Its construction is in the 3D plane. Take a unit cube and cut it into 27 equal squares. Remove only the centers of each face and the cube in the middle. Repeat the process with the remaining squares each iteration:

`
stringArray[15] = `
We can find a general form for the volume, using the volume of a cube and multiplying and scale each part of the model:
`
stringArray[16] = `
Where Anis the total volume of the 3D fractal at any iteration n. We merely need to take the limit as n approaches infinity:
`
stringArray[17] = `
Similar to the series, the limit will approach 0, because the (20/27) term is not  > 1
`

stringArray[18] = `
## Hausdorff Dimensionality - 

&nbsp;&nbsp;&nbsp;&nbsp;This is a measure often calculated when analyzing fractals. Hausdorff Dimension of a fractal describes fullness or jaggedness of the shape. We often think of objects in 1 Dimension, 2 Dimension and 3 Dimension. Fractals live in between these dimensions. We can find the Hausdorff Dimension using this form:
`

stringArray[19] = `
Let N be the self-similar copies produced by the fractal, and r the common-ratio that the copy is scaled to. Let’s find the Hausdorff dimensions of Jerusalem Cube:
`

stringArray[20] = `
We first find how many “copies” are made. We need to take account that an iteration making both smaller and larger cubes:

`
stringArray[21] = ` 
Now we have r: √2 -1, and N: 
`

stringArray[22] = ` 
Solve for N:
`

stringArray[23] = ` 
The interpretation of this value would be that the Jerusalem Cube partially fills 3D space without fully covering it. 
`

stringArray[24] = ` 
## Summary -
&nbsp;&nbsp;&nbsp;&nbsp;These exercises are by no means exhaustive, or rigorous, far from it. The choice of modeling these fractals was driven by the idea of emergence, how a small amount of logic gives way to these complex and beautiful structures. The most unexpected challenge was to take these structures and describe them in a mathematical context. And once in that mathematical context, using these mathematical tools to derive their properties. At its core, mathematics and its discoveries are driven by problems in nature. Mathematics is often taught in reverse. We develop theories and procedures to solve problems removed from real context. After mastery or understanding, then students are taught to apply these ideas to the real word. Research forces a student to do the reverse, find math that models the real world. 
### Readings and sources: 

[1] -  [https://en.wikipedia.org/wiki/Coastline_paradox]

[2]  - [https://en.wikipedia.org/wiki/Menger_sponge#Similar_fractals](https://en.wikipedia.org/wiki/Menger_sponge#Similar_fractals)

[3] - [https://www.robertdickau.com/jerusalemcube.html](https://www.robertdickau.com/jerusalemcube.html) 

  
Code - [https://github.com/DoxaCam/Fractal-Honors-Project/settings](https://github.com/DoxaCam/Fractal-Honors-Project/settings)

  
All graphics are made by me and the code is on github. . 

`

export default stringArray;