//php strcmp 比较字符串
function strcmp(str1,str2){
    if(str1==str2) return 0;
    return str1>str2?1:-1;
}
//忽略大小写
function strcasecmp(str1,str2){
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    if(str1==str2) return 0;
    return str1>str2?1:-1;
}