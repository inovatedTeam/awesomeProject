import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardItem from './cardItem';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailContainerStyle, thumbnalStyle, headerContentStyle, mainImageStyle } = styles;
    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnalStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={{ fontSize: 18 }}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image
                    style={mainImageStyle}
                    source={{ uri: image }} 
                />
            </CardItem>
            <CardItem>
                <Button onPress={ () => Linking.openURL(url) } >
                    Buy Now
                </Button>
            </CardItem>
        </Card>
    );

};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
    },
    thumbnalStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
    },
    mainImageStyle: {
        width: null,
        height: 300,
        flex: 1
    }
}

export default AlbumDetail;