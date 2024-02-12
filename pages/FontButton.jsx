import { useUserStore } from "@/store"

export default function FontButton() {

  // const fontSizeState = useSelector((state) => state.themes.userPreferences.fontSize);
  const fontSizeState = useUserStore((state) => {
    return state.userPreferences.fontSize;
  })

  // const dispatch = useDispatch();
  const changeFontSize = useUserStore((state) => {
    return state.changeFontSize;
  })

  return (
    
    <div className="flex flex-col gap-2">

      {fontSizeState === 'text-base' ?
      (<button className="p-2 bg-gray-400 dark:bg-gray-600 rounded-lg" onClick={() => {
       /*  dispatch(
        //changeFontSize({fontSize: 'x-large'})
        changeFontSize({fontSize: 'text-2xl'})
        ) */
        changeFontSize( 'text-2xl' )
      }}>
        Change Font Size of following text:
      </button>) :  (<button className="p-2 bg-gray-400 dark:bg-gray-600 rounded-lg " onClick={() => {
        /* dispatch(
       // changeFontSize({fontSize: 'medium'})
        changeFontSize({fontSize: 'text-base'})
        ) */
        changeFontSize( 'text-base' )
      }}>
        Change Font Size of following text:
      </button>)}

      <p className={fontSizeState}  /* style={{fontSize: `${fontSizeState}`}} */ > 
       <b>{fontSizeState}</b>
      </p>
      
    </div>
      
  )
  
}


