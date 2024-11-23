import { getShowdownPokemonImage } from "@/utils/image";
import { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";

type PokemonImageProps = {
  id: string;
  maxSize: number;
};

const PokemonImage = ({ id, maxSize }: PokemonImageProps) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const imageUrl = getShowdownPokemonImage(id.toString());

  useEffect(() => {
    Image.getSize(imageUrl, (width, height) => {
      setImageSize({ width, height });
    });
  }, [id]);

  return (
    <View>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id.toString()}.gif`,
        }}
        style={[
          styles.image,
          {
            width: imageSize.width * 3,
            height: imageSize.height * 3,
            maxWidth: maxSize,
            maxHeight: maxSize,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    resizeMode: "contain",
  },
});

export default PokemonImage;
