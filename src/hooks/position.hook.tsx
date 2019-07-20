import { useEffect, useState } from 'react';

const initialCoords: Coordinates = {
	accuracy: 0,
	altitude: null,
	altitudeAccuracy: null,
	heading: null,
	latitude: 0,
	longitude: 0,
	speed: null
};

const initialPosError: PositionError = {
	code: 0,
	message: '',
	PERMISSION_DENIED: 1,
	POSITION_UNAVAILABLE: 2,
	TIMEOUT: 3
};

interface IPositionResult {
	coords: Coordinates;
	error: PositionError;
}

// * Example usage:
// const {coords, error} = usePosition();  return (
//     <code>
//       latitude: {coords.latitude}<br/>
//       longitude: {coords.longitude}<br/>
//       error: {error.message}
//     </code>
//   );

const usePosition = (): IPositionResult => {
	const [coords, setCoords] = useState<Coordinates>(initialCoords);
	const [error, setError] = useState<PositionError>(initialPosError);

	const onChange = (position: Position): void =>
		setCoords({
			accuracy: position.coords.accuracy,
			altitude: position.coords.altitude,
			altitudeAccuracy: position.coords.altitudeAccuracy,
			heading: position.coords.heading,
			speed: position.coords.speed,
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});

	const onError = (error: PositionError): void => setError(error);

	useEffect(() => {
		const geo: Geolocation = navigator.geolocation;
		if (!geo) {
			setError({
				code: 2,
				message: 'Geolocation not supported',
				...initialPosError
			});
			return;
		}

		const watcher: number = geo.watchPosition(onChange, onError);
		return () => {
			geo.clearWatch(watcher);
		};
	}, []);

	return { coords, error };
};

export default usePosition;
