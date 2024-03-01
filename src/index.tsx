import { Detail } from "@raycast/api";
import ReactMarkdown from "react-markdown";


export default function () {

  const everything =
  ` 
  # Breathe
  ### As the bar moves upwards, inhale. As it retreats, exhale. 
                            
 ![Alt Text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG10aHZiaXdwbWg1b215eWFibXJkNW04NzFoeGtqczJkcGFwcmxleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qaojPCJEusQLpYQa7o/giphy.gif)
 
        “Nowhere can man find a quieter or more untroubled retreat than in his own soul.” – Marcus Aurelius
  `;

  return (
    <Detail markdown={everything} />
  ) 
}