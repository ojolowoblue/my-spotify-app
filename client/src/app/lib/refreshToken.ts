import { getLocalRefreshToken, setLocalAccessToken } from "app/utils/helpers";
import client from "app/api/client";

const refreshAccessToken = async () => {
  try {
    const { data } = await client.get(
      `/refresh_token?refresh_token=${getLocalRefreshToken()}`
    );
    const { access_token } = data;
    setLocalAccessToken(access_token);
    window.location.reload();
    return;
  } catch (e) {
    console.error(e);
  }
};

export default refreshAccessToken;
