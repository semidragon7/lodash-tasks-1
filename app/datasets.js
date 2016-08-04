module.exports = {

    functions: function() {
        function Foo() {
            this.square = "square";
        }
        Foo.prototype.cube = 1;
        function Foo2() {
            this.a = 'a';
            this.b = 'b';
        }
        Foo2.prototype.square=function(){return 0;};
        return [ new Foo ];
    },
//---------------------------------------------------------------
    functionsIn: function() {
        function Foo() {
            this.square = "square";
        }
        Foo.prototype.cube = function(){return 0;};
        return [ new Foo];
    },
//----------------------------------------------------------------
    pick1: function() {
        var obj={'red':1, 'green':2, 'blue':3, 'yellow':4};
        var tab=['red','yellow'];
        return [obj, tab];
    },

    pick2: function() {
        var obj={'red':1, 'green':2, 'blue':3, 'yellow':4};
        var str='green';
        return [obj, str];
    },

    pickBy2: function() {
        var obj={'x':16 };
        return [obj, function(){return 'x: 16';}];
    },

    set1: function() {
        var obj={'rectangle':[
            {
                "rect1": {
                    "height": 4,
                    "width": 8
                },
                "rect2": {
                    "height": 6,
                    "width": 6
                }
            }
        ]
        }
        var str='rectangle[0].rect1.height';
        return [obj,str,8];
    },

    set2: function() {
        var obj={'rectangle':[
            {
                "rect1": {
                    "height": 3,
                    "width": 4
                },
                "rect2": {
                    "height": 6,
                    "width": 6
                }
            }
        ]
        };
        var tab=['rectangle','0','rect1','height'];
        return [obj, tab, 8];
    },

    setWith: function() {
        var obj= {};
        return [obj, 'num', 7, Object];
    },

    toPairs: function() {
        function Foo() {
            this.apple='green';
            this.banana='yellow';
        }
        Foo.prototype.cherry='red';
        return [new Foo];
    },

    toPairsIn: function() {
        function Foo() {
            this.weight= 0.2;
        }
        Foo.prototype.eatable= true;
        return [new Foo];
    },

    transform1: function() {
        return [ [3, 5, 7, -5, -10 ], function(result, n) {
            if(n>0) {
                result.push(n.toString());
            }
            return n >  2;
        }, [] ];
    },

    transform2: function() {
        return [ {"width": ["5"],"weight": ["10"],"height": ["600"] } , function(result, value, key) {
            (result[value] || (result[value] = [])).push(key);
        }, {} ];
    },

    unset1: function() {
        var object = {"rectangle":[{"square":{"height": 4}}] };
        return [ object, 'rectangle[0].square.height' ];
    },

    unset2: function() {
        var object = {"triangle":[{"deminsions":{"d": 5}}] };
        return [object,['triangle','0','deminsions','d']];
    },

    update: function() {
        var obj = { 'rectangle': [{ 'rect1': { 'width': 4, 'height': 4}}] };
        var str = 'rectangle[0].rect1.height';
        var fun = function(n){return 2*n;};
        return [obj, str, fun];
    },

    updateWith: function() {
        var object = {"rectangle":[ {"rect2": {"height": 6, "width":4} } ] };
        var str='rectangle[0].rect2.height';
        var fun = function(n){return 2*n;};
        return [ object, str, fun];
    },

    values: function() {
        function Foo() {
            this.a = null;
            this.b = 2;
            //this.c = 3;
        }

        Foo.prototype.c = '3';
        return [new Foo];
    },

    valuesIn: function() {
        function Foo() {
            this.a = 6;
        }

        Foo.prototype.c = 7;
        return [new Foo];
    },

};