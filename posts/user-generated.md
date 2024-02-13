# 用户生成的鸡尾酒内容

如果从鸡尾酒这个主题出发开发一款软件，我觉得有两个方向：

- 开发一个鸡尾酒社区，让用户在其中探索。
- 开发一个鸡尾酒软件，提供可靠的内容，用户可以有限度的参与交流。

其实在我看过的比较优秀的菜谱类软件中，都是第二种形态。  
发布内容应该是网站编辑的工作，这些专职编辑会确保内容的高质量。  
后续网站可以直接通过提供内容来获得收益，这是一种比广告健康的多得多的方式。

对于社区的形式，用户发布内容很多时候都是为了获取正向反馈。  
其他用户可以关注你，追踪你的动态，比如在“下厨房”里面，一些粉丝比较多的烘焙博主就可以在粉丝圈子中售卖成品。

但其实不论你的产品设计如何优秀，发布菜谱都会是一个繁琐的过程。软件功能越强，菜谱越具体，发布菜谱的过程就越繁琐。  
首先你的屏幕上会有一大堆的控件。  
上传封面、标题、描述、步骤、步骤具体图、标签、原料以及更多更多的信息。  
无论你的产品设置多么合理，对于用户来说都是劝退的。就像你兴致冲冲的想为社区做一些贡献，但是你看到具体的页面后，也许你的兴致就没了。  
更麻烦的问题还在于，我需要为你保留菜谱的草稿，管理菜谱的状态，在你发布菜谱后还有菜谱修改的流程、还有审核等等...  
在社群规模比较小的时候，这是绝对不划算的，极大的开发成本可能并不会有多少人使用。

其次就是鸡尾酒和做菜的区别。  
鸡尾酒是有约束的，好不好喝基本在配方上就已经决定了。  
当然和做菜一样，任何人都可以声称自己发明了新的鸡尾酒，但调了个酒有什么资格来评价大家的发明呢？  
如果我说我觉得不好就拒绝，那是不够开放的。  
但如果我完全不考虑这个问题，调了个酒可能会被很多“不好喝的鸡尾酒”充满。

所以，我倾向由我来发布主题（话题），也就是那些我们都公认的，有一些名气的鸡尾酒。  
对于鸡尾酒来说，纯粹的菜谱内容太过趋同（而且我的内容其实没什么竞争力），社区的形态也不适合鸡尾酒这个主题，因为到底鸡尾酒还是非常小众的文化，事实上的用户群体无法支撑起一个社区运行。  
但我还在这两者之间寻找更多的方式让用户加入进来，软件不能太无聊，也不能太过度。

## 找一个平衡

虽然说调了个酒的用户不是很多，但到现在收到了相当多的反馈，集中在“要求添加自己的配方”这一点上。  
我为这个事头疼了一阵子，我想不出一种特别好的设计来让用户发布配方。  
我在搜索页面添加了 DM 链接，如果没有你想要的酒，你可以告诉我。  
但用户普遍不喜欢这种方式，而是自主去发布和管理内容。

在有一次的沟通中，一个人给了我启发：他说他想要添加自己的配方，在一个鸡尾酒的页面中，发布“自己的配方”。  
我发现我可能又死脑筋了。

我把“用户自定义配方”上升到了和菜谱一样的层级。但实际上他们可能只是需要替换配方中的某种原料或者比重，最好还可以评论！  
但如果“用户配方”是关联到菜谱上的，很多问题都变得可以解决了。

- 编辑器会变得轻量可以轻松的操作。
- 不需要关心用户菜谱和“调了个酒”菜谱的关系，也就是说如何分开管理和显示这两种菜谱。
- 菜谱的发布有一定约束了，防止质量低的内容过多。

用户配方当然可以展示在菜谱中的某一个位置，我开始考虑另外一个问题：  
我可能要给这种用户配方定义一种新的类型，以支持包括管理、评论等功能。  
要做到单纯的发布和展示是很简单的，但要支持评论可能比较麻烦，因为评论在设计时是只能与菜谱绑定到一起的。  
需要对评论的结构做一些调整，让他可以绑定到更多的类型上。

## 元信息和基于评论的配方

我发现很多鸡尾酒爱好者都喜欢在鸡尾酒网站的评论区中发布自己的配方。  
这其实就是一种最小化最简单的配方分享。

我突然意识到如果把配方作为评论的一部分，那就自动支持了回复嵌套、删除、点赞的操作！  
而图片附件可以作为你配方的封面图，正文可以作为进一步的制作过程描述。  
这直接以最小的改动实现了一个配方发布功能，我们只需要给用户提供一个原料与比重的模板即可。  
这又进一步简化了逻辑，也没有让调了个酒变得更加复杂。

经过长久的思考，这种设计我认为是非常优雅的！也是真正符合逻辑的。

在菜谱功能的长期设计中，我后续希望添加一些口味、制作方法、杯子一类的字段。  
如果有了全文搜索，这些字段其实完全不需要作为单独的数据库列存在，他们可以被以 JSON 的形式存储。我就称呼他为元信息（metadata）。

而每条评论也可以有自己的元信息，如果用户选择了在评论中附带一个配方，他就会以 JSON 形式存储，在客户端解析后显示。  
你也不需要修改已经发布的配方，如果有误，你可以再发布一遍，并选择删除或保留旧的配方。

调了个酒会在之后的几个版本中支持这个功能！