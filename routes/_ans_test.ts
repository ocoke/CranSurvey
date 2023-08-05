export default eventHandler(async () => {
    // await storage.setItem("foo:bar", "baz");
    const storage = useStorage()
    const ans: object = await storage.getItem('ans')
    return ans;
  })
  