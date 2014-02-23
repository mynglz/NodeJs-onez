/**
 * Created by raghug on 2/23/14.
 */

exports.home = function(request, response){

    try
    {
    response.write("<html>" +
        "<body><H1>This is the home page with two frames</H1>" +
        "<iframe src='http://localhost:81/index?c=5'></iframe>" +
        "<iframe src='http://localhost:81/index?c=10'></iframe>" +
        "</body></html>" +
        "" +
        "");
        response.end();

    }
    catch(e)
    {
        response.write("exception occurred");
        console.log((e.error));
        response.end();
    }
};
