(function(angular){
// 创建正在热模块
 var app = angular.module('moviecat.in_theaters',[]);



 // 创建控制器
 app.controller('movie_listController',
    function($scope,$http){
         $scope.data={
    "count": 5,
    "start": 0,
    "total": 36,
    "subjects": [
        {
            "rating": {
                "max": 10,
                "average": 8.2,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "科幻",
                "奇幻"
            ],
            "title": "奇异博士",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1009405/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
                    },
                    "name": "本尼迪克特·康伯巴奇",
                    "id": "1009405"
                }
            ],
            "collect_count": 39961,
            "original_title": "Doctor Strange",
            "subtype": "movie",
            "year": "2016",
            "images": {
                "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
                "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
                "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
            },
            "alt": "https://movie.douban.com/subject/3025375/",
            "id": "3025375"
        }, {
            "rating": {
                "max": 10,
                "average": 8.2,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "科幻",
                "奇幻"
            ],
            "title": "奇异博士",
            "casts": [
                {
                    "alt": "https://movie.douban.com/celebrity/1009405/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
                    },
                    "name": "本尼迪克特·康伯巴奇",
                    "id": "1009405"
                }
            ],
            "collect_count": 39961,
            "original_title": "Doctor Strange",
            "subtype": "movie",
            "year": "2016",
            "images": {
                "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
                "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
                "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
            },
            "alt": "https://movie.douban.com/subject/3025375/",
            "id": "3025375"
        }
    ],
    "title": "正在上映的电影-北京"
}
 });

})(angular)