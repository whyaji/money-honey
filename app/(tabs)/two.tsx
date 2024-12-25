import { useState } from 'react';
import { CURRENT_APP_VARIANT } from 'constants/AppVarriantName.enum';
import { useToastController } from '@tamagui/toast';
import * as Updates from 'expo-updates';
import { Button, Text, View } from 'tamagui';

export default function TabTwoScreen() {
    const toast = useToastController();
    const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

    const isDevelopment = CURRENT_APP_VARIANT === 'dev';

    async function onFetchUpdateAsync() {
        try {
            const update = await Updates.checkForUpdateAsync();
            setIsUpdateAvailable(update.isAvailable);
            if (update.isAvailable) {
                toast.show('Update is available', {
                    message: 'Download and run the update',
                    duration: 2000,
                });
            } else {
                toast.show('No updates available', {
                    message: 'You are running the latest version',
                    duration: 2000,
                });
            }
        } catch (error) {
            toast.show('Error checking for updates', {
                message: 'Please try again later',
                duration: 2000,
            });
            console.log(error);
        }
    }

    const { currentlyRunning } = Updates.useUpdates();

    // Show whether or not we are running embedded code or an update
    const runTypeMessage = currentlyRunning.isEmbeddedLaunch
        ? 'This app is running from built-in code'
        : 'This app is running an update';

    return (
        <View flex={1} alignItems="center" justifyContent="center" bg="$background">
            <Text fontSize={20} color="$blue10">
                {'Tab Two (Check for updates)'}
            </Text>
            {isDevelopment ? (
                <>
                    <Text>{runTypeMessage}</Text>
                    <Button onPress={onFetchUpdateAsync}>Check manually for updates</Button>
                    {isUpdateAvailable && (
                        <Button
                            onPress={async () => {
                                await Updates.fetchUpdateAsync();
                                await Updates.reloadAsync();
                            }}>
                            Download and run update
                        </Button>
                    )}
                </>
            ) : undefined}
        </View>
    );
}
