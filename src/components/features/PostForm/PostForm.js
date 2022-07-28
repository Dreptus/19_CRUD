
const PostForm = (action, actionText, ...props) => {

  const [title, setTitle] = useState(props.title || '')
  const [author, setAuthor] = useState(props.author || '')
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '')
const [shortDescription, setShortDescription] = useState(props.shortDescription || '')
const [content, setContent] = useState(props.content || '')
const [contentError, setContentError] = useState(false)
const [dateError, setDateError] = useState(false)
const [category, setCategory] = useState(props.category || '')
  return <></>
}

export default PostForm
