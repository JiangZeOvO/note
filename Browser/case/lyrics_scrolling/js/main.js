let lrc_data = `[00:00.00]Counting Stars - OneRepublic
[00:00.26]Lyrics by：Ryan Tedder
[00:00.52]Composed by：Ryan Tedder
[00:00.79]Lately I've been I've been losing sleep
[00:05.49]Dreaming about the things that we could be
[00:09.39]But baby I've been I've been praying hard
[00:14.36]Said no more counting dollars
[00:16.36]We'll be counting stars
[00:19.28]Yeah we'll be counting stars
[00:38.05]I see this life like a swinging vine
[00:40.67]Swing my heart across the line
[00:42.58]In my face is flashing signs
[00:44.57]Seek it out and ye' shall find
[00:46.47]Old but I'm not that old
[00:48.51]Young but I'm not that bold
[00:50.43]And I don't think the world is sold
[00:52.54]On just doing what we're told
[00:55.03]I I I I feel something so right
[00:59.23]Doing the wrong thing
[01:02.68]I I I I feel something so wrong
[01:07.03]Doing the right thing
[01:10.45]I couldn't lie couldn't lie couldn't lie
[01:14.20]Everything that kills me makes me feel alive
[01:18.16]Lately I've been I've been losing sleep
[01:21.93]Dreaming about the things that we could be
[01:25.75]But baby I've been I've been praying hard
[01:29.76]Said no more counting dollars
[01:31.71]We'll be counting stars
[01:33.84]Lately I've been I've been losing sleep
[01:37.72]Dreaming about the things that we could be
[01:41.64]But baby I've been I've been praying hard
[01:45.56]Said no more counting dollars
[01:47.52]We'll be we'll be counting stars
[01:56.75]I feel the love and I feel it burn
[01:59.45]Down this river every turn
[02:01.33]Hope is our four-letter word
[02:03.22]Make that money watch it burn
[02:05.14]Old but I'm not that old
[02:07.34]Young but I'm not that bold
[02:09.13]And I don't think the world is sold
[02:11.28]On just doing what we're told
[02:13.44]I I I I feel something so wrong
[02:17.84]Doing the right thing
[02:21.28]I couldn't lie couldn't lie couldn't lie
[02:25.07]Everything that drowns me makes me wanna fly
[02:28.90]Lately I've been I've been losing sleep
[02:32.81]Dreaming about the things that we could be
[02:36.60]But baby I've been I've been praying hard
[02:40.59]Said no more counting dollars
[02:42.61]We'll be counting stars
[02:44.72]Lately I've been I've been losing sleep
[02:48.71]Dreaming about the things that we could be
[02:52.40]But baby I've been I've been praying hard
[02:56.33]Said no more counting dollars
[02:58.15]We'll be we'll be counting stars
[03:04.42]Take that money
[03:05.02]Watch it burn
[03:05.85]Sink in the river
[03:06.88]The lessons I've learned
[03:08.05]Take that money
[03:08.73]Watch it burn
[03:09.92]Sink in the river
[03:10.89]The lessons I've learned
[03:12.01]Take that money
[03:12.83]Watch it burn
[03:13.86]Sink in the river
[03:14.85]The lessons I've learned
[03:16.02]Take that money
[03:16.91]Watch it burn
[03:17.84]Sink in the river
[03:18.83]The lessons I've learned
[03:19.98]Everything that kills me
[03:25.86]Makes me feel alive
[03:27.06]Lately I've been I've been losing sleep
[03:30.76]Dreaming about the things that we could be
[03:34.62]But baby I've been I've been praying hard
[03:38.63]Said no more counting dollars
[03:40.54]We'll be counting stars
[03:42.48]Lately I've been I've been losing sleep
[03:46.66]Dreaming about the things that we could be
[03:50.51]But baby I've been I've been praying hard
[03:54.52]Said no more counting dollars
[03:56.46]We'll be we'll be counting stars
[03:59.07]Take that money
[03:59.62]Watch it burn
[04:00.11]Sink in the river
[04:00.81]The lessons I've learned
[04:02.23]Take that money
[04:03.03]Watch it burn
[04:03.97]Sink in the river
[04:05.00]The lessons I've learned
[04:06.18]Take that money
[04:06.88]Watch it burn
[04:07.68]Sink in the river
[04:08.99]The lessons I've learned
[04:09.83]Take that money
[04:10.88]Watch it burn
[04:11.66]Sink in the river
[04:12.60]The lessons I've learned`;

/**
 * @desc            将LRC歌词字符串转换为对象数据
 * @author          Anttill
 * @version         1.0
 * @param           {string}                                lrc_str 歌词字符串
 * @return          {{time:number,words:string}[]}          歌词对象数组
 * @throws          {Error}                                 无
 * @see             parse_time
 */
function parse_lrc(lrc_str) {
    let lines = lrc_str.split("\n");
    let result = [];
    for (let i = 0; i < lines.length; i++) {
        let str = lines[i];
        let parts = str.split("]");
        let time_str = parts[0].substring(1);
        let obj = {time: parse_time(time_str), words: parts[1]};
        result.push(obj);
    }
    return result;
}

/**
 * @desc            时间字符串[00:00.00]转换成时长[0]
 * @author          Anttill
 * @version         1.0
 * @param           {string}                                time_str 时间字符串
 * @return          {number}                                时长
 * @throws          {Error}                                 无
 */
function parse_time(time_str) {
    let parts = time_str.split(":");
    return Number(parts[0]) * 60 + Number(parts[1]);
}

/**
 * @desc            根据播放器时间返回LRC歌词对象的下标
 * @author          Anttill
 * @version         1.0
 * @param           {{time:number,words:string}[]}          lrc_array 歌词对象数组
 * @param           {number}                                player_time 播放器时间
 * @return          {number}                                需要显示的歌词下标,没有则返回[-1]
 * @throws          {Error}                                 无
 */
function find_index(lrc_array, player_time) {
    for (let i = 0; i < lrc_array.length; i++) {
        if (player_time < lrc_array[i].time) {
            return i - 1;
        }
    }
    return lrc_array.length - 1;
}

/**
 * @desc            创建歌词标签
 * @author          Anttill
 * @version         1.0
 * @param           {{time:number,words:string}[]}          lrc_array 歌词对象数组
 * @param           {element}                               parent_element 父级元素
 * @throws          {Error}                                 无
 */
function create_lrc_element(lrc_array, parent_element) {
    let frag = document.createDocumentFragment();
    for (let i = 0; i < lrc_array.length; i++) {
        let li = document.createElement("li");
        li.textContent = lrc_array[i].words;
        frag.appendChild(li);
    }
    parent_element.appendChild(frag);
}

/**
 * @desc            设置偏移量
 * @author          Anttill
 * @version         1.0
 * @throws          {Error}                                 无
 */
function set_offset() {
    let index = find_index(lrc, doms.audio.currentTime);
    let offset = (li_height * index + li_height / 2) - (container_height / 2);
    if (offset < 0) offset = 0;
    if (offset > max_offset) offset = max_offset;
    doms.ul.style.transform = `translateY(-${offset}px)`;
    let old_li = doms.ul.querySelector(".active");
    if (old_li) {
        old_li.classList.remove("active");
    }
    let new_li = doms.ul.children[index];
    if (new_li) {
        new_li.classList.add("active");
    }
}

let lrc = parse_lrc(lrc_data);
let doms = {
    audio: document.getElementById("audio-player"),
    ul: document.querySelector(".container ul"),
    container: document.querySelector(".container"),
};
// 初始化
create_lrc_element(lrc, doms.ul);
// 容器高度
let container_height = doms.container.clientHeight;
// 歌词高度
let li_height = doms.ul.children[0].clientHeight;
// 最大偏移量
let max_offset = doms.ul.clientHeight - container_height;
// 事件
doms.audio.addEventListener("timeupdate", set_offset);
set_offset();
doms.audio.volume = "0.2";