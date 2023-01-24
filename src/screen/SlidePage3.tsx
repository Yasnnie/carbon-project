import PageTemplate from "../template/PageTemplate";
import Logo from '../../assets/icons/Logo.svg'
import { StyleSheet } from "react-native";
export default function SlidePage3(){
    return <PageTemplate style={styles.gradient}>
        <Logo width={120} height={120} />
    </PageTemplate>
}

const styles = StyleSheet.create({
    gradient:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    
})