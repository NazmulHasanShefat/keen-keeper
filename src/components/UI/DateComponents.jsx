"use client"
const monthShortNames = [
  "Jan", 
  "Feb", 
  "Mar", 
  "Apr", 
  "May", 
  "Jun", 
  "Jul", 
  "Aug", 
  "Sep", 
  "Oct", 
  "Nov", 
  "Dec"
];

export function GetFullYear({current_date}){
    return current_date ? new Date(current_date).getFullYear() : <p className="text-red-500 text-xs">plese give me <span className="text-green-500 underline"> current_date </span> prop</p>
}

export function GetMonth({current_date}){
    return current_date ?
    monthShortNames[new Date(current_date).getMonth()]:
    <p className="text-red-500 text-xs">plese give me <span className="text-green-500 underline"> current_date </span> prop</p>
}
export function GetDate({current_date}){
    return current_date ?
    new Date(current_date).getDate() :
    <p className="text-red-500 text-xs">plese give me <span className="text-green-500 underline"> current_date </span> prop</p>
}