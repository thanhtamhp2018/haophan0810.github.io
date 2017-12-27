//Database accessories-products
var PK01= {
    id:'PK01',
    name:'Sinh Nhật Ngọt Ngào',
    category:'accessories',
    description:'Làm ngọt theo cách bạn thể hiện mình với sự sắp xếp hoa hồng và hoa cẩm chướng tươi tắn và tươi tắn này. Những bông hồng và hoa cẩm chướng. Những bông hồng và hoa màu trắng nở lên cho dịp này, làm ấm trái tim của người đặc biệt đó trong cuộc sống của bạn.',
    title:'Giỏ hoa sinh nhật ngọt ngào',
    alt:'Giỏ hoa sinh nhật ngọt ngào',
    rating:4,
    cost:1000000,    
    //promotion sale new hot 
    classPromotion:'promotion-new',
    sale:10,    
    src:'images/accessories/PK01.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'N',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK02= {
    id:'PK02',
    name:'I\'ll Fly Away',
    category:'accessories',
    description:'Hít thở không khí trong lành bằng những bông hoa hồng, xanh lá cây và tím nóng bỏng, được thiết kế đặc biệt cho những bông hoa trong tâm trí của bạn. Tôi sẽ Fly Away là những gì họ sẽ nói khi mà bất ngờ hoàn hảo đất trên ngưỡng cửa của họ.',
    title:'Giỏ hoa I\'ll Fly Away',
    alt:'Giỏ hoa I\'ll Fly Away',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'promotion-new',
    sale:10,        
    src:'images/accessories/PK02.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'N',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK03= {
    id:'PK03',
    name:'Blooming Sunshine',
    category:'accessories',
    description:'Sinh động sống động và rực rỡ, sự sắp xếp quyến rũ này tràn ngập những bông hoa sáng và vui vẻ - một món quà sinh nhật tuyệt vời và thơm ngon!',
    title:'Giỏ hoa Blooming Sunshine',
    alt:'Giỏ hoa Blooming Sunshine',
    rating:4,
    cost:90000.90,
    //promotion sale new hot 
    classPromotion:'promotion-sale',
    sale:25,        
    src:'images/accessories/PK03.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'S',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK04= {
    id:'PK04',
    name:'Over the Blue Horizon',
    category:'accessories',
    description:'Hãy tưởng tượng đi thuyền trên Biển Caribê giữa vùng biển trong xanh. Mờ và sáng như bầu trời mùa đông kết hợp tinh tế của các hoa màu trắng và xanh này sẽ tạo nên một món quà bất ngờ tuyệt vời. Hiển thị cảm xúc của bạn để trở thành màu xanh thật sự với những gì họ sẽ nhớ suốt đời.',
    title:'Giỏ hoa Over the Blue Horizon',
    alt:'Giỏ hoa Over the Blue Horizon',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'promotion-hot',
    sale:10,        
    src:'images/accessories/PK04.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'H',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK05= {
    id:'PK05',
    name:'The Princess Diaries',
    category:'accessories',
    description:'Từ lâu đài mê hoặc, đã từng có một người phụ nữ trẻ xinh đẹp đến thị trấn Camelot. Được ban phước với vẻ đẹp tinh tế và ân sủng tinh tế, cô bắt đầu câu chuyện về The Princess Diaries. Cảm giác rằng ai đó đặc biệt trong cuộc sống của bạn với một liên lạc của cánh hoa nhạt từ trời!',
    title:'Giỏ hoa The Princess Diaries',
    alt:'Giỏ hoa The Princess Diaries',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'promotion-hot',
    sale:10,        
    src:'images/accessories/PK05.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'H',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK06= {
    id:'PK06',
    name:'Three Hearts of Charm',
    category:'accessories',
    description:'Hoa hồng đỏ truyền đạt cảm giác yêu thương và sự hòa hợp cho người đặc biệt đó. Ba Trái tim của Charm chỉ là món quà hoàn hảo để làm nổi bật khoảnh khắc đó sẽ kéo dài mãi mãi. Cho họ thấy một tình yêu hoàn hảo từ trái tim của bạn.',
    title:'Giỏ hoa Three Hearts of Charm',
    alt:'Giỏ hoa Three Hearts of Charm',
    rating:4,
    cost:1000000,
    //promotion sale nclassPw hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK06.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK07= {
    id:'PK07',
    name:'accessories Flowers of Europe',
    category:'accessories',
    description:'Hoa hồng, tím và vàng vào cuộc sống từ loại hoa hồng tươi sáng rực rỡ này. Một sự bất ngờ sinh ngày ấm áp cho những người bạn thực sự quan tâm!',
    title:'Giỏ hoa accessories Flowers of Europe',
    alt:'Giỏ hoa accessories Flowers of Europe',
    rating:4,
    cost:1000000,
    //promotion sale nclassPw hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK07.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK08= {
    id:'PK08',
    name:'Soothing Elegance accessories',
    category:'accessories',
    description:'Sự mềm mại của hoa huệ hồng đặt xung quanh một loại hoa tươi, trắng, thực sự là một lời ngợi khen cho vẻ đẹp của thiên nhiên và tiền thưởng. Hiển thị người mà bạn quan tâm vào ngày sinh nhật của họ với bó hoa này nở rộ nhưng rực rỡ.',
    title:'Giỏ hoa Soothing Elegance accessories',
    alt:'Giỏ hoa Soothing Elegance accessories',
    rating:4,
    cost:1000000,
    //promotion sale nclassPw hot 
    classPromotion:'',
    sale:10,
    oldCost:'',    
    src:'images/accessories/PK08.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK09= {
    id:'PK09',
    name:'A Windfall of Orchids',
    category:'accessories',
    description:'Khuyến khích tinh thần với những bông hoa thanh lịch và quyến rũ này. Tỏa ra niềm vui của vẻ đẹp tinh khiết!',
    title:'Giỏ hoa A Windfall of Orchids',
    alt:'Giỏ hoa A Windfall of Orchids',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK09.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK10= {
    id:'PK10',
    name:'Dreams Of Joy',
    category:'accessories',
    description:'Một tầm nhìn sống động của những lời chúc sinh nhật nồng nhiệt nhất, mang đến cho bạn một cuộc sống tươi trẻ như bó hoa thơm ngát! Những bông hoa oải hương màu hồng và hoa oải hương nhẹ nhàng được kết hợp với hoa hồng tinh tế, tràn ngập từ bình hoa rực rỡ.',
    title:'Giỏ hoa Dreams Of Joy',
    alt:'Giỏ hoa Dreams Of Joy',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK02.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK11= {
    id:'PK11',
    name:'Purity Bouquet',
    category:'accessories',
    description:'Hoàn hảo tinh khiết, sẵn sàng, và breathtakingly đẹp! Vui vẻ hân hoan, chạm vào vẻ đẹp, và tình cảm tinh tế với bó hoa này được sắp xếp một cách chuyên nghiệp bởi một người bán hoa chuyên nghiệp. Nâng tinh thần của họ - gửi ngày hôm nay!',
    title:'Giỏ hoa Purity Bouquet',
    alt:'Giỏ hoa Purity Bouquet',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK11.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK12= {
    id:'PK12',
    name:'White Roses',
    category:'accessories',
    description:'Cổ điển, tinh khiết, và đơn giản là tuyệt đẹp - nói tất cả những gì bạn phải nói với sự thanh lịch ngoạn mục của hoa hồng màu kem.',
    title:'Giỏ hoa White Roses',
    alt:'Giỏ hoa White Roses',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK12.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK13= {
    id:'PK13',
    name:'One Dozen Red Roses',
    category:'accessories',
    description:'Biểu tượng của tình yêu không mệt mỏi, sang trọng dễ dàng với món quà cổ điển của một tá hoa hồng đỏ quyến rũ. Mỗi cánh hoa quý giá đại diện cho một trong vô số lý do rằng cô ấy là người bạn không thể thoát khỏi tâm trí của bạn khi cô ấy phát triển đẹp hơn mỗi năm. Cho cô ấy thấy rằng bạn muốn kỷ niệm sinh nhật của mình một cách hoàn hảo nhất, gửi hoa ngày hôm nay.',
    title:'Giỏ hoa One Dozen Red Roses',
    alt:'Giỏ hoa One Dozen Red Roses',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK13.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK14= {
    id:'PK14',
    name:'Perfectly Pleasant',
    category:'accessories',
    description:'Tinh tế và ngoạn mục là chủ đề trong ngày! Hoàn toàn Pleasant chụp một khoảnh khắc quý giá của hoa hồng, hoa oải hương, và màu vàng hợp tác để làm cho rằng nhân dịp đặc biệt hoàn thành. Hát và nhảy múa với màu sắc của mùa xuân cho thời gian đó của cuộc sống của họ chỉ là xung quanh góc.',
    title:'Giỏ hoa Perfectly Pleasant',
    alt:'Giỏ hoa Perfectly Pleasant',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK14.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK15= {
    id:'PK15',
    name:'Fresh Blossom Potpourri',
    category:'accessories',
    description:'Một mảng chói của hoa tươi thơm được sẵn sàng trên một chiếc nồi đất terra cotta đáng yêu với một ruy băng sáng. Thiết kế hoàn hảo thơm ngon này sẽ mang lại nụ cười hạnh phúc và hạnh phúc sighs! Nói sinh nhật vui vẻ với phong cách và chân thành, gửi hoa!',
    title:'Giỏ hoa Fresh Blossom Potpourri',
    alt:'Giỏ hoa Fresh Blossom Potpourri',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK15.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK16= {
    id:'PK16',
    name:'Exotic Scarlet Nights',
    category:'accessories',
    description:'Nét đẹp cổ điển và thanh lịch tuyệt vời, mảng hoa hồng đỏ rực rỡ này với ân sủng và quyến rũ! Hạnh phúc, nở hoa phong phú luôn luôn làm cho một mùi ngọt ngào và thực sự đáng nhớ món quà sinh nhật!',
    title:'Giỏ hoa Exotic Scarlet Nights',
    alt:'Giỏ hoa Exotic Scarlet Nights',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK16.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK17= {
    id:'PK17',
    name:'Butterfly Basket',
    category:'accessories',
    description:'Mang lại nụ cười vui vẻ với bộ sưu tập đầy màu sắc và niềm vui này! Gửi hoa ngày hôm nay!',
    title:'Giỏ hoa Butterfly Basket',
    alt:'Giỏ hoa Butterfly Basket',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK17.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK18= {
    id:'PK18',
    name:'Fashionista Chic',
    category:'accessories',
    description:'Nhẫn vào mùa xuân với thời trang Fashionista Chic! Một sự hợp tác tinh tế nhất của pastels trong ánh sáng chiếu sáng của màu vàng, hồng, và màu xanh lá cây nổi bật rằng mùa xuân đã đến. Waltz xuống sàn catwalk như thể thế giới đang theo dõi một vẻ đẹp tuyệt đẹp không bao giờ bỏ qua!',
    title:'Giỏ hoa Fashionista Chic',
    alt:'Giỏ hoa Fashionista Chic',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK02.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK19= {
    id:'PK19',
    name:'An Exotic Flare of Sunset',
    category:'accessories',
    description:'Rạng rỡ hoa hồng và một loạt các loại hoa tươi khác đã nở hoa từ sự sắp xếp này trong sắc thái tinh tế của đào và hồng. Đẹp, thơm và sôi động, bó hoa này tạo nên một món quà sinh nhật tuyệt vời cho người đặc biệt!',
    title:'Giỏ hoa An Exotic Flare of Sunset',
    alt:'Giỏ hoa An Exotic Flare of Sunset',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK19.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK20= {
    id:'S20',
    name:'A Little Bit of Blush',
    category:'accessories',
    description:'Nâng cao kính champagne của bạn trong dịp kỷ niệm sự kiện hoàn hảo đó! Cuộc sống cuộc sống đầy đủ và không bao giờ nhìn lại! Hãy nhấn mạnh khoảnh khắc trong những hương thơm hấp dẫn nhất trong bộ rạn rực rỡ, hoa đào quý báu, và màu trắng rực rỡ để làm cho dịp thích hợp!',
    title:'Giỏ hoa A Little Bit of Blush',
    alt:'Giỏ hoa A Little Bit of Blush',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK20.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}
var PK21= {
    id:'PK21',
    name:'Bear Hug Bear',
    category:'accessories',
    description:'Cánh tay của anh ta tràn ngập một bó hoa tuyệt đẹp, gấu ngựa nhỏ của chúng ta vẫn còn ôm lấy một cái ôm sinh nhật! Các màu hoa hồng và tím quý giá gửi lời chúc mừng sinh nhật của bạn một cách ngọt ngào, trong khi những hoa hồng cổ điển sẽ thích thú giữa các loại hoa tươi thơm.',
    title:'Giỏ hoa Bear Hug Bear',
    alt:'Giỏ hoa Bear Hug Bear',
    rating:4,
    cost:1000000,
    //promotion sale new hot 
    classPromotion:'',
    sale:10,        
    src:'images/accessories/PK21.jpg',
     //codePromotion S:sale N:new H:hot D:default
    codePromotion:'D',
    textPromotion:function(){
        var text='default';
        if(this.codePromotion==='N'){
            text='new';
        }
        if(this.codePromotion==='S'){
            text='off ' + this.sale + '%';
        }
        if(this.codePromotion==='H'){
            text='hot';
        }
        return text;

    },
    oldCost:function(){
        return Math.round(this.cost);
    },
    curentCost:function(){
        if(this.codePromotion!=='S'){
            return Math.round(this.cost);
        }else {
            let m= this.cost - (this.cost*this.sale)/100;
            return Math.round(m);
        }         
    },
}