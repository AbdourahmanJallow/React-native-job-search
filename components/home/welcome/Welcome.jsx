import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
    const [search, setSearch] = useState("");
    const [activeJobType, setActiveJobType] = useState("Full-Time");
    const router = useRouter();

    return (
        // <View>
        <View style={styles.container}>
            {/* username */}
            <View>
                <Text style={styles.userName}>Hello Adrian</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>
            {/* Search Input */}
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        value={""}
                        onChange={() => {}}
                        placeholder="What are you looking for?"
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                    <Image
                        source={icons.search}
                        resizeMode="cover"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            {/* Flat List */}
            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeJobType, item)}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
        // {/* </View> */}
    );
};

export default Welcome;
