import clsx from 'clsx'

const Learn_clsx = () => {

    const custom_clsx = (arg) => {
        let str = ""
        for (const key in arg) {
            if (arg[key]) {
                str += " " + key
            }
        }
        return str
    }
    const z = custom_clsx({
        test: true,
        "dd dummy": true
    })
    console.log(z)


    const x = clsx({
        test: true,
        "dd dummy": true
    })
    console.log(x)

    return <>
        <div>Learn_clsx</div>
    </>

}

export default Learn_clsx