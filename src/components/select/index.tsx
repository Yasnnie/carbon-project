import React, { useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native'
import { colors } from '../../styles/colors'
import SelectIcon from '../../../assets/icons/SelectIcon.svg'

export interface DataDropdown {
  label: string
  value: string
}

interface SelectProps {
  label: string
  data: DataDropdown[]
  onSelect: (item: { label: string; value: string }) => void
  style?: StyleProp<ViewStyle> | undefined
}

export default function Select({ label, data, onSelect, style }: SelectProps) {
  const DropdownButton = useRef<any>(null)
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState<DataDropdown | undefined>(undefined)
  const [dropdownTop, setDropdownTop] = useState(0)

  const toggleDropdown = () => (visible ? setVisible(false) : openDropdown())

  function openDropdown() {
    DropdownButton.current.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number
      ) => {
        setDropdownTop(py + h)
      }
    )
    setVisible(true)
  }

  function onItemPress(item: DataDropdown) {
    setSelected(item)
    onSelect(item)
    setVisible(false)
  }

  function renderItem({ item }: { item: DataDropdown }) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  function renderDropdown() {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={[styles.button, style]}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.label}>{(selected && selected.label) || label}</Text>
      <SelectIcon width={16} height={13} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray,
    height: 48,
    paddingHorizontal: 16,
    zIndex: 1,
    width: '100%',
    maxWidth: 272,
  },
  label: {
    color: colors.white,
    fontFamily: 'roboto',
    fontSize: 16,
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: colors.orange,
    width: '100%',
    maxWidth: 272,
    maxHeight: 144,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 14,

    borderBottomWidth: 1,
    borderColor: colors.darkOrange,
  },
})
