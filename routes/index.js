/**
 * Created by raghug on 2/23/14.
 */

exports.index = function(request, response, maxcount){
    try
    {
        response.write("This is " + maxcount + " seconds frame (index.js)<br/>");
        LoopTimer(response,0,maxcount)
    }
    catch(e)
    {
        response.write("exception occurred");
        console.log((e.error));
        response.end();
    }
};
function LoopTimer(response, indexcounter, maxcount)
{
    try
    {
        response.write("index " + indexcounter + "<br/>");
        indexcounter++;
        if(indexcounter < maxcount)
        {
            setTimeout(function(){LoopTimer(response,indexcounter, maxcount);}, 1000);
        }
        else
        {response.end();}
    }
catch(e)
    {
        response.write("exception occurred");
        console.log((e.error));
        response.end();
    }
}
