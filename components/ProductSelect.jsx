import { useState } from 'react'
import Select from 'react-select'
import chroma from 'chroma-js'
import { productAPI } from '../api'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from 'react-i18next'

function ProductSelect({ data, filterId, productId }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  const notifyErorr = () => toast.error(t('Product not found'))

  const getFilter = async (e) => {
    setLoading(true)

    let idCheckbox = e.id

    try {
      const res = await productAPI.singleProductFilter(
        filterId,
        idCheckbox,
        currentLang
      )

      if (res.status) {
        if (res.data.data.length) {
          if (productId === res.data.data[0].id) {
            notifyErorr()
          } else {
            router.push({
              pathname: '/products/[pid]',
              query: { pid: res.data.data[0].id },
            })
          }
        } else {
          notifyErorr()
        }
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data?.value)
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data?.value
          : isFocused
          ? color.alpha(0.5).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data?.value,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data?.value
              : color.alpha(0.5).css()
            : undefined,
        },
      }
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data?.value)
      return {
        ...styles,
        backgroundColor: color.alpha().css(),
      }
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data?.value,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data?.value,
      ':hover': {
        backgroundColor: data?.value,
        color: 'white',
      },
    }),
  }

  return (
    <div className="w-full gap-5 xs:flex">
      {data?.map((item) =>
        item.type === 'color' ? (
          <div className="basis-1/3" key={item.label}>
            <label className="text-base font-normal">Выберите длину:</label>
            <Select
              defaultValue={item.properties[0]}
              options={item.properties}
              isDisabled={loading}
              className="mt-2"
              styles={colourStyles}
              onChange={getFilter}
              theme={(theme) => ({
                ...theme,
                borderRadius: 2,
                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                colors: {
                  ...theme.colors,
                  primary: 'black',
                },
              })}
            />
          </div>
        ) : (
          <div className="basis-1/3" key={item.label}>
            <label className="text-base font-normal">Выберите длину:</label>
            <Select
              defaultValue={item.properties[0]}
              options={item.properties}
              isDisabled={loading}
              className="mt-2"
              onChange={getFilter}
              theme={(theme) => ({
                ...theme,
                borderRadius: 2,
                borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                colors: {
                  ...theme.colors,
                  primary: 'black',
                },
              })}
            />
          </div>
        )
      )}
    </div>
  )
}

export default ProductSelect
