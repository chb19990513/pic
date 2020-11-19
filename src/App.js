import React, { useState, useCallback } from 'react';
import "./App.css"

const PictureSelect = props => {

  const changeAll = useCallback(() => {
    if (props.value.length === props.pictures.length) {
      props.onChange([])
    } else {
      let arr = props.pictures.map(item => {
        return item.id
      })
      props.onChange(arr)
    }
  }, [props])

  const changeItem = useCallback(id => {
    const arr = [...props.value]
    if (arr.indexOf(id) === -1) {
      arr.push(id)
    } else {
      arr.splice(arr.indexOf(id), 1);
    }
    props.onChange(arr)
  }, [props])

  return (
    <>
      <input type="checkbox" onChange={changeAll} checked={props.value.length === props.pictures.length} />
      <ul>
        {
          props.pictures.map(item => {
            return (
              <li key={item.id}>
                <img src={item.url} alt="" />
                <input type="checkbox" checked={props.value.includes(item.id)} onChange={() => changeItem(item.id)} />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

const Page = () => {
  const [value, setValue] = useState(['1']);
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ]

  // console.log(value); // 输出用户选择图片 id。

  return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};

export default Page;
