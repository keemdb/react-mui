// component : 속성 사용시 해당 태그로 적용 가능
// gutterBottom : margin-bottom 적용

import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
	<div>
		<Typography variant="h1">h1 Heading</Typography>
		<Typography variant="h2">h2 Heading</Typography>
		<Typography variant="h3">h3 Heading</Typography>

		<Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>

		<Typography variant="h5">h5 Heading</Typography>
		<Typography variant="h6">h6 Heading</Typography>
		<Typography variant="subtitle1">sub title 1</Typography>
		<Typography variant="subtitle2">sub title 2</Typography>
		<Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur fuga mollitia eveniet expedita asperiores modi saepe. Id vel laborum culpa accusamus quidem nisi asperiores magni, praesentium ipsum veniam, nesciunt consequatur.</Typography>

		<Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur fuga mollitia eveniet expedita asperiores modi saepe. Id vel laborum culpa accusamus quidem nisi asperiores magni, praesentium ipsum veniam, nesciunt consequatur.</Typography>
	</div>
  )
}
