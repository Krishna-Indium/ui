import classes from './style.module.scss'

//TODO: this is not coming up in the build. We need to resolve this in ordet to use the SCSS variables in javascript
const Test = (): JSX.Element => {
	console.log(classes)
	return (
		<>
			{/* you can pass it to styles or use it as a variable in another css system , like SCSS */}
			<h1>Hello World!</h1>
			<div className={classes['container']}>
				<div className={classes['child']}></div>
				<div className="second-child flex mt-[2rem] flex-row"></div>
				<div className={classes['inner']}></div>
			</div>
			<div className="second-child"></div>
			{/* this does not get styles , means the parent child relationship is working fine */}
		</>
	)
}

export default Test
