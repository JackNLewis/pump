import supabase from '../SupaBase';

export const getProfiles = async (searchText: string) => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select()
      .like('user_name', `%${searchText}%`);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};