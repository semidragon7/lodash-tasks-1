'use strict';


module.exports = {

    assign: function(){
        function oo(number,string){
            this.number=number;
            this.string=string;
        }
        var obj1 = new oo(6,'default');
        oo.prototype.square = 36;
        return [ { 'number': 5, 'square': 25, 'ping': function(){return "Number: " + this.number;},
            'pong': function(){return 'Number: 25';}}, obj1, {} ];
    },

    //alias _.extend
    assignIn: function(){
        function oo(number, cube){
            this.number=number;
            this.cube=cube;
        }
        var obj1 = new oo(5, 2);
        oo.prototype.square = function(x){return 'Square: '+(x*x)};
        oo.prototype.fourthPower = 256;
        return [{'number': 5,'square': function(x){return 'Square: '+(x*x);} }, obj1, {}];
    },

    at1: function(obj){

        return [obj, ['book[0].other.pages', 'book[0].count']];
    },

    at2: function(){
        var tab3 = ['mate','companion','fellow','worker','friend','helper'];
        return [tab3, ['.[0]','.[4]'] ];
    },

    defaults: function(){

        return [{'square':1, 'name': 'John', 'surname': 'Smith', 'age':25}, {'name': 'Tom', 'gender': 'male'}, {'surname': 'Twist'}];
    },

    defaultsDeep: function(){

        return [{'data':{'text':'Tim','reversedText':'miT'}},{'data':{'text':'mouse','reversedText':'esuom','lengthText':function () {return 5;}}}];
    },

    findKey1: function(obj){

        return [obj,function(x){return x.number > 20;}];
    },

    findKey2: function(obj) {

        return [obj, {}];
    },

    findKey3: function(obj) {

        return [obj, []];
    },

    findKey4: function(obj) {

        return [obj, 'abc'];
    },

    findLastKey1: function(obj){

        return [obj, function(x){ return x;}];
    },

    findLastKey2: function(obj){

        return [obj, {}];
    },

    findLastKey3: function(obj){

        return [obj, []];
    },

    findLastKey4: function(obj){

        return [obj, 'abc'];
    },

    forIn: function(){
        function oo(arms, legs){
            this.arms=arms;
            this.legs=legs;
        }
        var obj1 = new oo(4,4);
        oo.prototype.head=1;
        return [obj1, function(x){return x*x;}];
    },

    forInRight: function() {
        function oo(arms, legs) {
            this.arms = arms;
            this.legs = legs;
        }

        var obj1 = new oo(4, 4);
        oo.prototype.head = 1;
        return [obj1, function (x) {
            oo.prototype.head=2;
            return 2 * x;
        }];
    },

    forOwn: function(){

        function oo(r,d){
            this.r=r;
            this.d=d;
        }
        var obj1 = new oo(7, 14);
        oo.prototype.l =4.4;
        return [obj1, function(x){return x;}];
    },

    forOwnRight: function() {
        function oo(r, d) {
            this.r = r;
            this.d = d;
        }

        var obj1 = new oo(7, 14);
        oo.prototype.l = 4.4;
        return [obj1, function (x) {
            return x;
        }];
    },

    get1: function(obj){

        var obj={'aaaaaaaaaaaaaa':{'bbbbbbbbbbbbb':'be cool'}}
        return [obj, 'aaaaaaaaaaaaaa.bbbbbbbbbbbbb'];
    },

    get2: function(obj) {
        var obj={'a':{'b': {'c': {'d': 'be cool'} } }}
        return [obj, ['a','b','c','d']];
    },

    get3: function(obj){

        return [obj, 'str', 'default value'];
    },

    has1: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, 'bike.wheels'];
    },

    has2: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, ['bike','wheels']];
    },

    hasIn1: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, 'bike.wheels'];
    },

    hasIn2: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, ['bike','wheels'] ];
    },

    invert: function(obj1){

        return [obj1];
    },

    invertBy1: function(obj1){

        return [obj1];
    },

    invertBy2: function(obj){

        return [obj];
    },

    invoke1: function(obj){

        return [obj,'key[0].number.random.unshift',99];
    },

    invoke2: function(obj){

        return [obj,'key[0].number.random.pop'];
    },

    keys: function(){
        function Foo() {
            this.teacher = 'Mr. Tom';
            this.students = 27;
            this.girls=15;
            this.boys=12;
        }
        Foo.prototype.animals=1;
        return [ new Foo ];
    },

    keysIn: function(){
        function Foo() {
            this.arms = 4;
            this.legs=8;
            this.heads=2;
        }
        Foo.prototype.limbs= function(x){return 12;};
        Foo.prototype.tails=1
        return [ new Foo ];
    },

    mapKeys2: function(obj){

        return [ obj, function(){} ];
    },

    mapValues1: function(obj){
        return [obj, function(o) { return o.vmax; }];
    },

    mapValues2: function(obj){

        return [obj, 'name'];
    },

    merge: function(){
        var obj1={
            'data':[{'owner':'Adam'},{'owner':'Tom'},{'owner':'John'}]
        };

        var obj2={
            'data':[{'cats':3},{'dogs':5},{'ostrich':1}]
        };
        return [obj1, obj2];
    },

    mergeWith: function(){
        var object1={
            'website':['blog'],'technique':['HTML5']
        };

        var object2={
            'website':['shop'],'technique':['xHTML']
        };

        return [object1,object2,function (obj1,obj2) {
            return obj1.concat(obj2);
        }];
    },

    omit1: function(obj){

        return [obj, 'sde'];
    },

    omit2: function(obj){

        return [obj,[1,2,3]];
    },

    omitBy: function(obj, filter){

        return [obj,filter];
    },

    result1: function(obj){

        return [obj,'exercises.tasks[2].thirdTask'];
    },

    result2: function(obj) {

        return [obj,['exercises','tasks','2','thirdTask']];
    },

    result3: function(obj){

        return [obj,'exercises.tasks.thirdTask','default value'];
    },

    result4: function(obj){

        return [obj,'exercises.tasks.thirdTask', function(){return 'default value';}];
    }
};