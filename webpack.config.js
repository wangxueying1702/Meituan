"use strict"

var path = require("path");

const BUILDDIRNAME = "build";
const COMPIELDIR="src"
var entryPath= path.resolve(__dirname,"js/main");
var outputPath= path.resolve(__dirname,BUILDDIRNAME);
var excludeDir= path.resolve(__dirname,"node_modules");
var includeDir = path.resolve(__dirname,COMPIELDIR );


const rules=[
    {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","react"]},exclude:excludeDir,include:includeDir},
    {test:/\.jsx$/,loader:"babel-loader",query:{presets:["es2015","react"]},exclude:excludeDir,include:includeDir},
    {test:/\.css$/,loaders:["style-loader","css-loader"]},
    {test:/\.(png|jpg|gif|jpeg|webp)$/,loader:"url-loader"},
    {test:/\.(woff|woff2|ttf|svg|eot)$/,loader:"file-loader"}
]

module.exports={
    entry:entryPath,
    output:{
        filename:"main.bundle.js",
        path:outputPath
    },
    module:{
        rules:rules
    }
}