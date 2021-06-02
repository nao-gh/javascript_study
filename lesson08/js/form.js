$(function(){
"use strict";
    $("#form").on("submit", function(){
        if($("[name='name']").val() === "") {

            var result = $("#result");
            
            $(".error").addClass("error-background");
            result.append("名前を入力してください");
            return false;
            
            //メモ
            //result.append("<div>" + this.usage_category + "：" + this.usage_category_detail + "</div>");
            //$(".fbg").addClass("error-background");
            // console.log("名前を入力してください");
            // $(".error").addClass("error-background");

        };
    });
});