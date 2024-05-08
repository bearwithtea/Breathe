import { Detail } from "@raycast/api";
import ReactMarkdown from "react-markdown";


export default function () { //literally the whole thing, lol.

  const everything =
  ` 
  # Breathe
  ### As the bar moves right, inhale. As it moves left, exhale. 
                            
 ![Breathing Gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYndmeHlldnA3Zm80dXcwajBobzJuN3JqbnFydGprNnpxYzBoNnE2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/0cYs8RisLWOjg6Dc6l/giphy.gif)
 
`

  return (
    <Detail markdown={everything} />
  ) 
}
