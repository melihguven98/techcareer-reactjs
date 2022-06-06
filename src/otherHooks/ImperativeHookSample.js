import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function ImperativeHookSample(props, ref) {

  useImperativeHandle(
    ref,
    () => ({
      focusInput: () => {

        inputRef.current.focus();

      },

      loseFocus: () => {

        inputRef.current.blue();

      },
    }),
  )

  const inputRef = useRef();

  return (<>
       <div>

          <input type="text" ref={inputRef} />

       </div>
  </>)
}

export default forwardRef(ImperativeHookSample);