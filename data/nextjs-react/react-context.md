---

Description: Information about react context that I have gathered throughout the internet.

---

- *092022II* : The issue with Context is simple—when the state of a Context object is updated it triggers a re-render within all consumer components. This can expose significant performance issues in an application if many components are being re-rendered every time a state value is updated. When using Context, it’s good to take into consideration how many components will be affected by a single state update and act accordingly on your findings. (Source: https://webdevstudios.com/2021/05/04/sharing-data-in-next-js-with-react-context/)


`The problem that I see within this is that I want to use context to have in them the state related to the particular objects that I will fetch from the database. How can I update the comments of the recordings without triggering a re-render of the whole application? This seems like a problem that I need to address. It doesn't seem that people use context to share the particular data that will be used in the application. This is the problem that I have faced building all the things that I have built with nextjs: How can I have that 'global' fetching of data that will bring me the information from all the kriyas in the /kriyas route and then use that information to fetch the particular kriya that will be displayed after clicking in an element of this list? Where do I get the information for displaying /kriyas/[id]? This is something that has came up again and again, and there doesn't seem to be a particular answer yet in my domain of knowledge.`


- *112022II* : 
