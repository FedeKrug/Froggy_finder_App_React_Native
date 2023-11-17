import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';

export const SoundDemo = () => {
    const playSound = () => {
        let sound = new Sound('sing.mp3', Sound.MAIN_BUNDLE, (error: any) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

            // Play the sound with an onEnd callback
            sound.play((success: any) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        });
    }

    return (
        <View style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor: "#e86e30",
                    width: 50,
                    height: 50,
                    borderRadius: 100,

                }}
                onPress={playSound}
            >
                <Text>3902</Text>
            </TouchableOpacity>
            <Text>
                Frog Sing
            </Text>
        </View>
    )
}





// // Import the react-native-sound module
// var Sound = require('react-native-sound');

// // Enable playback in silence mode
// Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.


// // Reduce the volume by half
// whoosh.setVolume(0.5);

// // Position the sound to the full right in a stereo field
// whoosh.setPan(1);

// // Loop indefinitely until stop() is called
// whoosh.setNumberOfLoops(-1);

// // Get properties of the player instance
// console.log('volume: ' + whoosh.getVolume());
// console.log('pan: ' + whoosh.getPan());
// console.log('loops: ' + whoosh.getNumberOfLoops());

// // Seek to a specific point in seconds
// whoosh.setCurrentTime(2.5);

// // Get the current playback point in seconds
// whoosh.getCurrentTime((seconds: any) => console.log('at ' + seconds));

// // Pause the sound
// whoosh.pause();

// // Stop the sound and rewind to the beginning
// whoosh.stop(() => {
//     // Note: If you want to play a sound after stopping and rewinding it,
//     // it is important to call play() in a callback.
//     whoosh.play();
// });

// // Release the audio player resource
// whoosh.release();